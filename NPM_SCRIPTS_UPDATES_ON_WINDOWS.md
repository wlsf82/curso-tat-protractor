# Atualização de npm scripts em sistema operacional Windows

Alguns dos npm scripts do arquivo `package.json` tem comandos específicos para sistema operacionais baseados em Unix, tais como OS X e Linux, portanto, quando utilizando sistema operacional Windows algumas alterações são necessárias. Veja abaixo:

No script `test:visual`, substitua o comando `rm -rf backstop_data/bitmaps_test` por `rmdir /S /Q backstop_data\\bitmaps_test `.

E nos scripts `test:e2e:chome` e `test:e2e:firefox`, substitua o comando `rm -rf test/e2e/html-report/` por `rmdir /S /Q test\\e2e\\html-report`.

Com estas modificações os scripts editados devem funcionar sem problemas em ambiente Windows.
