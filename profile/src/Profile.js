import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Tabs, Tab, Avatar, TextField, Button, Switch } from '@mui/material';
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

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const PaddedGridItem = styled(Grid)(({ theme }) => ({
  paddingLeft: theme.spacing(3), // Add tab space
  paddingTop: theme.spacing(2), // Consistent spacing
  paddingBottom: theme.spacing(2), // Consistent spacing
}));

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
              <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
                <Tab label="Profile" />
                <Tab label="Notification Settings" />
                <Tab label="Change Password" />
                <Tab label="Terms and Conditions" />
              </Tabs>
            </Grid>
          </Grid>
          <WhitePaper elevation={3} style={{ marginTop: 16 }}>
            {selectedTab === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12} container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar
                      alt="Profile Picture"
                      src="https://via.placeholder.com/100"
                      sx={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <StyledTextField
                      value="Rhona Asg"
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            border: 'none',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <StyledTextField
                    label="Email"
                    value="rhona.asg@gmail.com"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: '0.8rem' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <StyledTextField
                    label="Mobile Number"
                    value="(208) 555-0112"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: '0.8rem' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <StyledTextField
                    label="Company Name"
                    value="The Walt Disney Company"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: '0.8rem' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <StyledTextField
                    label="Designation"
                    value="Human Resource Manager"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: '0.8rem' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <StyledTextField
                    label="Joining Date"
                    value="20/06/2021"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: '0.8rem' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    label="Bio"
                    value="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet...', comes from a line in section 1.10.32."
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <StyledButton variant="contained" color="primary">
                    Edit Profile
                  </StyledButton>
                </Grid>
              </Grid>
            )}
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
          </WhitePaper>
        </GreyPaper>
      </Root>
    </Container>
  );
};

export default Profile;
