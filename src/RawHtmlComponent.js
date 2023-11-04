import React from 'react';

class RawHtmlComponent extends React.Component {
  render() {
    const rawHtml = this.props.rawHtml;
    return (
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    );
  }
}

export default RawHtmlComponent;
