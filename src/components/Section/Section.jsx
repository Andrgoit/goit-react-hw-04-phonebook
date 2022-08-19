import PropTypes from 'prop-types';
import { StyledSection, StyledTitle } from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
