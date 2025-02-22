# NodeJS


## gyp install error

- May be found issue with python version ^3.12
- You have to down grade python to 3.10 because distutils was removed in python 3.12.
- Recommend to use [pyenv](https://github.com/pyenv/pyenv?tab=readme-ov-file#set-up-your-shell-environment-for-pyenv)
- Flowing install by this
   ```bash
   brew install pkg-config cairo pango libpng jpeg giflib librsvg
   ```
   [Reference issue in rabbit](https://www.reddit.com/r/learnpython/comments/17ciqnl/modulenotfounderror_no_module_named_distutils_on/)

## canvas error

(mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e' or 'arm64'))

```
npm run rebuild
```