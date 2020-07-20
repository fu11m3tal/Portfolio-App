<Dialog scroll="body" maxWidth="lg" open={modal1} onClose={toggle1}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <div className="hero-wrapper bg-composed-wrapper bg-plum-plate h-100">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image "
                  style={{ backgroundImage: 'url(' + hero1 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5" />
                <div className="bg-composed-wrapper--content p-5">
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                      New release
                    </span>
                    <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!">
                      <span className="text-white-50 pl-3">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="text-white mt-3">
                    <h1 className="display-4 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-md mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button color="primary" variant="contained">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <div className="d-flex justify-content-center">
                  <Tooltip arrow title="Facebook">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Twitter">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Google">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Instagram">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="bg-white ">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}>
                <Tab className="py-3" label="Timeline" />
                <Tab className="py-3" label="Tasks" />
                <Tab className="py-3" label="Reports" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        31
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Implemented
                        <br />
                        bugfixes
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        68
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Unresolved
                        <br />
                        tickets
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        57
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Support
                        <br />
                        requests
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <Card className="card-box bg-secondary mb-4">
                  <CardContent className="p-3">
                    <div className="text-left">
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'lemon']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-3 line-height-sm">
                        <b className="font-size-lg text-black">3,568</b>
                        <span className="text-black-50 pl-1">clicks</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <LinearProgress color="primary" value={85} />
                      <div className="align-box-row progress-bar--label mt-2 text-muted">
                        <div>Target</div>
                        <div className="ml-auto">100%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center">
                  <Button variant="outlined" color="primary">
                    Create new report
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Card className="m-0 bg-secondary border-0">
                  <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="text-center">
                      <Button variant="outlined" className="mr-2 text-facebook">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </span>
                        <span className="btn-wrapper--label">Facebook</span>
                      </Button>
                      <Button variant="outlined" className="ml-2 text-twitter">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </span>
                        <span className="btn-wrapper--label">Twitter</span>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-center text-black-50 mb-3">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form className="px-5">
                      <div className="mb-3">
                        <FormControl className="w-100">
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Email address
                          </InputLabel>
                          <Input
                            fullWidth
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <MailOutlineTwoToneIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>
                      <div className="mb-3">
                        <FormControl className="w-100">
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            id="standard-adornment-password"
                            fullWidth
                            type="password"
                            startAdornment={
                              <InputAdornment position="start">
                                <LockTwoToneIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>
                      <div className="w-100">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked1}
                              onChange={handleChange1}
                              value="checked1"
                              color="primary"
                            />
                          }
                          label="Remember me"
                        />
                      </div>
                      <div className="text-center">
                        <Button
                          color="primary"
                          variant="contained"
                          size="large"
                          className="my-2">
                          Sign in
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Card className="card-box bg-secondary mb-4">
                      <div className="card-indicator bg-first" />
                      <CardContent className="px-4 py-3">
                        <div className="pb-3 d-flex justify-content-between">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Presentation site design
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="badge badge-primary px-3">
                            On Hold
                          </div>
                          <div className="font-size-sm text-danger px-2">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1"
                            />
                            14:22
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card className="card-box bg-secondary mb-4">
                      <div className="card-indicator bg-success" />
                      <CardContent className="px-4 py-3">
                        <div className="pb-3 d-flex justify-content-between">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Create UI mockups
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="px-3 badge badge-success">Fixed</div>
                          <div className="font-size-sm text-dark px-2">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1"
                            />
                            09:41
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <div className="timeline-list">
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                        <span className="text-info ml-2 badge badge-neutral-info">
                          New
                        </span>
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-2">
                        <Button
                          size="small"
                          variant="contained"
                          color="primary">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </Dialog>