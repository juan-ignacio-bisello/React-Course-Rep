import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle } ) => {


    const newMessage = 'Ignacio';
    return ( 
        // <> funciona como un Fracmento sin la necesidad de hacer la importación
        <>
            <h1>{ title }</h1>

            <p>{ subTitle }</p>
            
            <p>No se </p>
        </>
        
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    title:'No hay',
    subTitle:'No hay subtitulo'
}