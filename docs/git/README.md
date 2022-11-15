# คำสั่งที่ใช้บ่อย ๆ

- ย้อน commit + remove file
```bash
   git revert <commit_id>
   git reset --hard
   git clean -df
```

- อยากเปลี่ยน branch แต่ยังไม่อยาก commit
```bash
   git stash push --include-extrash -m "message"

   # ถ้าอยากเอาอันล่าสุดที่ stash มาใช้
   git stash pop
   # ถ้าอยากเลือก stash ที่ต้องการ
   git stash apply
```

- Change commit message
```bash
   git commit --amend -m "new message"
```