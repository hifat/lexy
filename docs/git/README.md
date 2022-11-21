# คำสั่งที่ใช้บ่อย ๆ

- ย้อน commit + remove file
```bash
   git revert <commit_id>
   git reset --hard
   git clean -df
```

- อยากเปลี่ยน branch แต่ยังไม่อยาก commit
```bash
   git stash push --include-untracked -m "message"

   # ถ้าอยากเอาอันล่าสุดที่ stash มาใช้
   git stash pop

   # List stash
   git stash list

   # ถ้าอยากเลือก stash ที่ต้องการ
   git stash apply 'stash@{0}'
```

- Change commit message
```bash
   git commit --amend -m "new message"
```