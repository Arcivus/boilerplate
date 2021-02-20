---
to: ../../js/app/<%=path%><%= name %>/<%= name %>Container.tsx
---
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import <%= name %>Component from "./<%= name %>Component";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>Component);