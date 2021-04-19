import PropTypes from 'prop-types'
// import Styles from 'styles.css'



export const Profile = ({fullName, bio, profession,  }) => {
    
   
   
    return(
            
           <h1>{fullName}</h1>
        
    )
    
}

Profile.defaultProps = {
    fullName: 'Khaled Ahmed',
}

Profile.propTypes = {
    fullName: PropTypes.string,
}

