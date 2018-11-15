import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import LanguageSelect from "./LanguageSelect";
import { ApplicationState } from "../../store";
import { getLanguages } from "../../store/countries/selectors";
import { setLanguage } from "../../store/filter/actions";

const mapStateToProps = (state: ApplicationState) => ({
  languages: getLanguages(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setLanguage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelect);
