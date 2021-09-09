//VER VIDEO 88 DEL CURSO DE FERNANDO HERRERA
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
     
module.exports = {
 
    mode: 'development',
    output: {
        clean: true  //limpiar el contenido de la carpeta dist y los vuelve a crear
    },
    module: {
        rules: [ //sirven para decirle a webpack que hacer con ciertos archivos, por ejemplo que mande el index.html a la carpeta dist
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpeg|gif)/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', //para que tome como plantilla el index que creamos en src
            //filename: './index.html'  //opciona, por defecto el nombre es index.html
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.[fullhash].css',
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'},
            ]
        }),
    ]
 
    
}