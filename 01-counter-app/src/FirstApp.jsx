import PropTypes from 'prop-types';

export const FirstApp = ( {title} ) => {


    const newMessage = 'Ignacio';
    return ( 
        // <> funciona como un Fracmento sin la necesidad de hacer la importación
        <>
            <h1>{ title }</h1>
            <p>No se </p>
        </>
        
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title:'No hay'
}