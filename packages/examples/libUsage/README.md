O diretório lib é buildado em cada ação, o que significa que todas as suas ações, de forma individual, contém os mesmos arquivos, portanto que eles sejam colocados nesse diretório.

Para utilizar o diretório "lib" e por consequência, evitar a duplicação de código, sua ação deve conter um arquivo chamado ".include", nele, você irá especificar cada arquivo o qual seu deploy irá incluir (inclusive os de dentro da sua ação).

Por exemplo, essa ação leva esse arquivo ".include":
```
main.js -> arquivo principal
package.json -> arquivo que irá buildar a ação

../../../lib/ -> diretório lib
```

Em uma ação mais complexa, o arquivo ".include" poderia ficar assim:
```
main.js -> arquivo principal
package.json -> arquivo que irá buildar a ação
utils/ -> diretórios de funções úteis

../../../lib/ -> diretório lib
```

Dentro do arquivo ".include", você pode incluir de forma mais especifica assim:
```
../../../lib/ -> diretório lib, dessa forma, tudo dentro de lib é exportado.
../../../lib/db/ -> tudo dentro de /lib/db/ é exportado.
../../../lib/test.js -> apenas o arquivo test.js é exportado.
```

É importante freezar que você deve SEMPRE pôr o arquivo package.json no ".include". Ele também deverá conter todas as libs que o arquivo original usa, exemplo: caso os arquivos do diretório /lib/db/ usem o ORM prisma, o prisma deve ser baixado também na sua action. 