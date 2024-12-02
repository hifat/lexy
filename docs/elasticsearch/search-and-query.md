# Search & Query

### [Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html)

#### GET /recipes/_search

-  Size
   -  Default size is 10

```json
{
   "size": 10
}
```

-  Source

```json
//  It like a `SELECT`

{
   "_source": ["title", "preparation_time_minutes"]
}
```

```json
// Select all and except some fields

{
   "_source": {
      "excludes": "description"
   }
}
```

-  Pagination

total_pages = ceil(total_hits / page_size)  
from = page_size \* (page_number - 1)

```json
{
   "_source": false, // Not display fields
   "size": 5,
   "from": 15
}
```

-  Sort

```json
{
   "_source": ["preparation_time_minutes", "created"],
   "sort": [
        { "preparation_time_minutes": "desc" },
        { "created": "asc" }
    ]
}
```

- Score

Scoring  algorithm that ES use is [Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25)  
Youtube CodeBangkok: [Elasticsearch: Search & Query](https://youtu.be/YKr52eyWPkE?t=1107) for explain

#### GET products/_search

Search by term and explain

```json
{
  "query": {
    "term": {   // Term search non-case sensitive
      "name": {
        "value": "lobster"
      }
    }
  },
  "explain": true // optional just explain
}
```

```json
{
  "query": {
    "term": {   // Term search only lower case because name ถูก analyze ให้เป็น lower case หมดแล้ว
      "name": {
        "value": "lobster"
      }
    }
  },
  "explain": true // optional just explain
}
```

```json
{
  "query": {
    "term.keyword": {   // เจอคำแบบเป๊ะ ๆ
      "name": {
        "value": "lobster"
      }
    }
  },
  "explain": true // optional just explain
}
```

- Search with multiple terms
```json
{
  "query": {
    "terms": {
      "tags.keyword": [
        "Soup",
        "Cake"
      ]
    }
  }
}
```

- Search with ID
```json
{
  "query": {
    "ids": {
      "values": [1,2,3]
    }
  }
}
```

- Search range values
```json
{
  "query": {
    "range": {
      "in_stock": {
        "gte": 1,
        "lte": 5
      }
    }
  }
}
```

- Search with date
```json
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01",
        "lte": "2010/12/31",
      }
    }
  }
}
```

Change date format

```json
{
  "query": {
    "range": {
      "created": {
        "gte": "01-01-2010",
        "lte": "31-12-2010",
        "format": "dd-MM-yyy"
      }
    }
  }
}
```

`"01-01-2010||-1M"`: it mean 1 month back  
`"now-4y"`: it mean 4 years back from now

**You can round down month or day**  
`"now/M-4y"`: Start from first month 4 years back from now  
`"now/d-4y"`: Start from first time of each days  

- Search with non null
```json
{
  "query": {
    "exists": {
      "field": "tags"
    }
  }
}
```

Not Logic

```json
{
  "query": {
    "bool": {
      "must_not": [
        {
          "exists": {
            "field": "tags"
          }
        }
      ]
    }
  }
}
```

- Search With Prefix

```json
{
  "query": {
    "prefix": {
       "tags.keyword": {
         "value": "Vege"
       }
    }
  }
}
```

- Search With wildcard 

`"*table"`, `"Vege*"`, ``"Vege?able"``

```json
{
  "query": {
    "prefix": {
       "tags.keyword": {
         "value": "*Vege"
       }
    }
  }
}
```

- Search with regex

```json
{
  "query": {
    "regexp": {
      "tags.keyword": {
        "value": "Vege[a-zA-Z]+able"
      }
    }
  }
}
```

### GET recipes/_search

- Full text query
`"match"` it search non-sensitive case and default is OR logic, Search by split words
`"match_phrase"` Not split words
```json
{
  "_source": ["title"], 
  "query": {
    "match": {
      "title": "pasta spaghetti",
      "operator": "and", // optional default is OR logic
    }
  }
}
```

- Multiple match query

Search by fields `title` and `description`

```json
{
  "_source": ["title"], 
  "query": {
    "match": {
      "title": "pasta spaghetti",
      "fields": ["title", "description"]
    }
  }
}
```

- Bool Query
```json
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "ingredients.name": "pasta"
          }
        }
      ],
      "must_not": [
        {
          "match": {
            "ingredients.name": "cheese"
          }
        }
      ],
      "should": [
        {
          "match": {
            "ingredients.name": "shallot"
          }
        }
      ], 
      "filter": [
        {
          "range": {
            "preparation_time_minutes": {
              "lte": 20
            }
          }
        }
      ]
    }
  }
}
```

props ที่อยู่ใน bool เราเติม `"_name"` เข้าไปแล้วมันจะแสดงให้ดูว่า keyword ที่โดน match คืออะไร เช่น
```json
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "ingredients.name": {
              "query": "pasta",
              "_name": "pasta_match" // The value up to you :)
            }
          }
        }
      ],
    }
  }
}
```

### GET /orders/_search

- Metrics Aggregations

```json
{
  "size": 0,
  "aggs": {
    "total_sales": {
      "sum": {
        "field": "total_amount"
      }
    },
    "avg_sales": {
      "avg": {
        "field": "total_amount"
      }
    },
    "min_sale": {
      "min": {
        "field": "total_amount"
      }
    },
    "max_sale": {
      "max": {
        "field": "total_amount"
      }
    },
    "total_saleman": {
      "cardinality": {
        "field": "salesman.id"  // Like a COUNT(id)
      }
    },
    "value_count": {
      "value_count": {
        "field": "salesman.id" // Like a COUNT(*)
      }
    },
     "stats": { // รวม min max count avg sum ไว้ในทีเดียว
      "stats": {
        "field": "total_amount"
      }
    }
  }
}
```

- Bucket Aggregation

```json
{
  "size": 0,
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status.keyword",  // Group by and count
        "size": 10  // ถ้าใส่มันจะดึงข้อมูลตาม top size มากไปน้อย
      }
    }
  }
}
```

- Nested Aggregation

```json
{
  "size": 0,
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status.keyword",
        "size": 10
      },
      "aggs": {
        "status_stat": {
          "stats": {
            "field": "total_amount"
          }
        }
      }
    }
  }
}
```

- Aggregation include query

```json
{
  "size": 0,
  "query": {
    "range": {
      "total_amount": {
        "gte": 100
      }
    }
  }, 
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status.keyword",
        "size": 10
      }
    }
  }
}
```

```json
{
  "size": 0,
  "query": {
    "range": {
      "total_amount": {
        "gte": 100
      }
    }
  }, 
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status.keyword",
        "size": 10
      }
    },

    // ส่วนตรงนี้มันจะ sum ข้อมูลใน index ทั้งหมดโดยไม่สน condition ด้านบน
    "all_orders": {
      "global": {},
      "aggs": {
        "global_stat": {
          "stats": {
            "field": "total_amount"
          }
        }
      }
    }
  }
}
```