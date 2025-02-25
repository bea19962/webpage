const ProjectCard = ({ title, description, image, link }) => {
 return (
   <div style={cardStyle}>
     <img src={image} alt={`${title} preview`} style={imageStyle} />
     <h3 style={titleStyle}>{title}</h3>
     <p style={descriptionStyle}>{description}</p>
     {link && (
       <a href={link} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
         View Project
       </a>
     )}
   </div>
 );
};

// Styles for ProjectCard
const cardStyle = {
 border: '1px solid #ddd',
 borderRadius: '8px',
 padding: '16px',
 textAlign: 'center',
 width: '100%',
 maxWidth: '300px',
 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
 width: '100%',
 height: '180px',
 objectFit: 'cover',
 borderRadius: '8px',
};

const titleStyle = {
 fontSize: '1.25rem',
 margin: '12px 0 8px',
 color: '#333',
};

const descriptionStyle = {
 fontSize: '1rem',
 color: '#555',
};

const buttonStyle = {
 display: 'inline-block',
 marginTop: '12px',
 padding: '8px 16px',
 backgroundColor: '#3498db',
 color: 'white',
 textDecoration: 'none',
 borderRadius: '4px',
 fontWeight: 'bold',
};

export default ProjectCard;
