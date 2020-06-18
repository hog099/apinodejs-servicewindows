@echo off
cls
:menu
cls
color 0f

date /t

echo Computador: %computername%        Usuario: %username%
                   
echo            MENU
echo  ====================================
echo * 1. Ir para Diretorio             * 
echo * 2. Instalar Lib PM2 Global       * 
echo * 3. Instalar Dependencias         * 
echo * 4. Instalar Servico Food         * 
echo * 5. Listar Servicos               * 
echo * 6. Parar Servico Food do PM2     * 
echo * 7. Reiniciar Servico do Food     * 
echo * 8. Deletar Servico do Food       * 
echo * 9. Sair                          * 
echo  ====================================

set /p opcao= Escolha uma opcao: 
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% equ 7 goto opcao7
if %opcao% equ 8 goto opcao8
if %opcao% equ 9 goto opcao9

:opcao1
cls
cd C:\Brajan\brajanfood\dist
echo ====================================
echo *     Diretorio Encontrado         *
echo ====================================
pause
goto menu

:opcao2
cls
npm i -g pm2
echo ====================================
echo *     PM2 instalado com Sucesso    *
echo ====================================
pause
goto menu

:opcao3
cls
npm i
echo ====================================
echo *    Servico Iniciado com Sucesso   *
echo ====================================
pause
goto menu


:opcao4
cls
pm2 start server.js --name foodservice
echo ====================================
echo *  Servicos Listados com Sucesso   *
echo ====================================
pause
goto menu


:opcao5
cls
pm2 ls
echo ====================================
echo *  Servicos Listados com Sucesso   *
echo ====================================
pause
goto menu



:opcao6
cls
pm2 stop foodservice
echo ====================================
echo *   Servico parado com Sucesso     *
echo ====================================
pause
goto menu



:opcao7
cls
pm2 restart foodservice
echo ====================================
echo *  Servico Reiniciado com Sucesso  *
echo ====================================
pause
goto menu


:opcao8
cls
pm2 delete foodservice
echo ====================================
echo *  Servico Deletado com Sucesso    *
echo ====================================
pause
goto menu




:opcao9
cls
exit
