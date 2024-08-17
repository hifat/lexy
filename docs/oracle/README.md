# ORACLE DB

## Gant
```sql
GRANT CREATE SESSION TO LAB
GRANT CREATE ANY TABLE TO LAB
GRANT RESOURCE TO LAB
ALTER USER LAB QUOTA 100M ON USERS
```

## Precision and Scale
- Precision is length of value
- Scale is length of decimal

#### EX.1
000000.000
NUMBER(9, 3)

#### EX.1
0000000.000000
NUMBER(13, 6)
