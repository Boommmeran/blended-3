import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      setError(false);
      const fetchCountries = async () => {
        const countries = await getCountries();
        console.log(countries);
        setFetchedCountries(countries);
      };
      fetchCountries();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && (
          <Heading>Something went wrong, please reload this page</Heading>
        )}
        {fetchedCountries.length !== 0 && (
          <CountryList countries={fetchedCountries} />
        )}
      </Container>
    </Section>
  );
};

// codeSpell
