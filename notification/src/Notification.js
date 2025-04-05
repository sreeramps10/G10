import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Tabs, Tab, Switch } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const GreyPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.secondary,
}));

const WhitePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const PaddedGridItem = styled(Grid)(({ theme }) => ({
  paddingLeft: theme.spacing(3), // Add tab space
  paddingTop: theme.spacing(2), // Consistent spacing
  paddingBottom: theme.spacing(2), // Consistent spacing
}));

const Notification = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [notifications, setNotifications] = useState({
    intervention: true,
    scorecard: true,
    respondents: true,
    newSolutions: true,
    emailUpdates: true,
  });

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleNotificationChange = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  const descriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature";

  return (
    <Container>
      <Root>
        <GreyPaper elevation={3}>
          <Grid container direction="column" alignItems="flex-start" spacing={2}>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                Settings
              </Typography>
            </Grid>
            <Grid item>
              <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Profile" />
                <Tab label="Notification Settings" />
                <Tab label="Change Password" />
                <Tab label="Terms and Conditions" />
              </Tabs>
            </Grid>
          </Grid>
          <WhitePaper elevation={3} style={{ marginTop: 16 }}>
            {selectedTab === 1 && (
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5">
                    Notification Settings
                  </Typography>
                </Grid>
                <PaddedGridItem item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Intervention Notification</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {descriptionText}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={notifications.intervention}
                      onChange={handleNotificationChange}
                      name="intervention"
                    />
                  </Grid>
                </PaddedGridItem>
                <PaddedGridItem item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Scorecard Notification</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {descriptionText}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={notifications.scorecard}
                      onChange={handleNotificationChange}
                      name="scorecard"
                    />
                  </Grid>
                </PaddedGridItem>
                <PaddedGridItem item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Respondents Notification</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {descriptionText}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={notifications.respondents}
                      onChange={handleNotificationChange}
                      name="respondents"
                    />
                  </Grid>
                </PaddedGridItem>
                <PaddedGridItem item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">New Solutions</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {descriptionText}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={notifications.newSolutions}
                      onChange={handleNotificationChange}
                      name="newSolutions"
                    />
                  </Grid>
                </PaddedGridItem>
                <Grid item>
                  <Typography variant="h5" style={{ marginTop: 16 }}>
                    Email Notifications
                  </Typography>
                </Grid>
                <PaddedGridItem item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Announcements & Updates</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {descriptionText}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={notifications.emailUpdates}
                      onChange={handleNotificationChange}
                      name="emailUpdates"
                    />
                  </Grid>
                </PaddedGridItem>
              </Grid>
            )}
            {selectedTab === 0 && (
              <Typography variant="body1">
                Profile content goes here.
              </Typography>
            )}
            {selectedTab === 2 && (
              <Typography variant="body1">
                Change Password content goes here.
              </Typography>
            )}
            {selectedTab === 3 && (
              <Typography variant="body1">
                Terms and Conditions content goes here.
              </Typography>
            )}
          </WhitePaper>
        </GreyPaper>
      </Root>
    </Container>
  );
};

export default Notification;
