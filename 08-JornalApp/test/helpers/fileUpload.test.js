import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dwusbi8vo',
    api_key: '834246187922523',
    api_secret: 'fdqbuRTlDvj0Ue69hxT-5dRgMMU',
    secure: true
});

describe('Pruebas en fileUpload', () => { 

    test('should subir el archivo correctamente a Cloudinary', async() => { 
        
        const imageUrl = 'https://images.squarespace-cdn.com/content/v1/568fc93e841abaff890947fc/1719487781288-B3A37BFWWQYP855O4VY2/Schwabacer+Facebook.jpg?format=1000w';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File( [blob], 'foto.jpg' );

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace( '.jpg', '' );

        await cloudinary.api.delete_resources([ imageId ]);
     });

     test('should retornar null', async() => { 
        
        const file = new File( [], 'foto.jpg' );

        const url = await fileUpload( file );

        expect( url ).toBe( null );
      })
 })