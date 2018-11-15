import { ApplicationState } from "../../store";
import { getCountriesByLanguage } from "../../store/countries/selectors";
import { connect } from "react-redux";
import CountriesList from "./CountriesList";

const mapStateToProps = (state: ApplicationState) => ({
  countries: getCountriesByLanguage(state)
});

export default connect(mapStateToProps)(CountriesList);
