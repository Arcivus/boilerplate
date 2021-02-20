---
to: ../../js/app/<%= h.inflection.camelize(name, true) %>/<%=component%>Container.ts
---
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import <%=component%>Component from "./<%=component%>Component";

const mapStateToProps = (state, ownProps) => ({
  // items: state.items,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(<%=component%>Component);
