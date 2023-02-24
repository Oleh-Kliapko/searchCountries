import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');

    if (!region) return;

    setIsLoading(true);

    fetchByRegion(region)
      .then(setCountries)
      .catch(error => error.message)
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {!isLoading && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
