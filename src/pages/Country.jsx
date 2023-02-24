import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  // console.log(countryId);
  useEffect(() => {
    fetchCountry(countryId).then(setCountry);
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
