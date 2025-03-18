import { fileUpload } from "../../src/helpers/fileUpload"

describe('Pruebas en fileUpload', () => { 

    test('should subir el archivo correctamente a Cloudinary', async() => { 
        
        const imageUrl = 'https://images.squarespace-cdn.com/content/v1/568fc93e841abaff890947fc/1719487781288-B3A37BFWWQYP855O4VY2/Schwabacer+Facebook.jpg?format=1000w';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File( [blob], 'foto.jpg' );

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

     })
 })