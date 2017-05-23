import React from 'react';
import {Paper} from 'material-ui';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {overlayColor, brandColor} from 'Assets/theme/application.theme';

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  get styles() {
    return {
      logo: {
        margin: '14px 10px 0 -8px'
      },
      headerContainer: {
        height: '60vh',
        display: 'table',
      },
      heading: {
        textTransform: 'uppercase',
        fontSize: '4vmin',
        display: 'table-cell',
        verticalAlign: 'middle'
      }
    }
  };

  render() {
    return (
      <div>
        <Paper zDepth={0} style={{borderRadius: 0, backgroundColor: 'transparent'}}>
          <Grid>
            <div className="wrap">
              <Col xs={12}>
                <Row center="xs">
                  <div style={this.styles.headerContainer}>
                    <h1 style={this.styles.heading}>
                      Jump start with <span style={{color: overlayColor}}>Laravel ReactJS</span> Single Page applications
                    </h1>
                  </div>
                </Row>
              </Col>
            </div>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default LandingContainer;
