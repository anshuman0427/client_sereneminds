import React from 'react';
import {
  CssVarsProvider,
  Typography,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Input,
  Stack,
} from '@mui/joy';

// Personal Information Section
const PersonalInformation = () => (
  <>
    <Typography level="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      1. Personal Information
    </Typography>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Age Group</FormLabel>
      <RadioGroup name="age-group">
        <Radio value="under-18" label="Under 18" />
        <Radio value="18-25" label="18-25" />
        <Radio value="26-35" label="26-35" />
        <Radio value="36-50" label="36-50" />
        <Radio value="51-65" label="51-65" />
        <Radio value="66+" label="66+" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Gender</FormLabel>
      <RadioGroup name="gender">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
        <Radio value="non-binary" label="Non-Binary" />
        <Radio value="prefer-not-to-say" label="Prefer not to say" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Occupation Status</FormLabel>
      <RadioGroup name="occupation-status">
        <Radio value="student" label="Student" />
        <Radio value="employed-full-time" label="Employed (Full-Time)" />
        <Radio value="employed-part-time" label="Employed (Part-Time)" />
        <Radio value="self-employed" label="Self-Employed" />
        <Radio value="unemployed" label="Unemployed" />
        <Radio value="retired" label="Retired" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Marital Status</FormLabel>
      <RadioGroup name="marital-status">
        <Radio value="single" label="Single" />
        <Radio value="married" label="Married" />
        <Radio value="in-a-relationship" label="In a Relationship" />
        <Radio value="divorced" label="Divorced" />
        <Radio value="widowed" label="Widowed" />
      </RadioGroup>
    </FormControl>
  </>
);

// Mental Health & Well-being Section
const MentalHealthWellBeing = () => (
  <>
    <Typography level="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      2. Mental Health & Well-being
    </Typography>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>What brings you to therapy? (Select all that apply)</FormLabel>
      <Stack direction="column" spacing={1}>
        <Checkbox value="anxiety-stress" label="Anxiety or stress" />
        <Checkbox value="depression-low-mood" label="Depression or low mood" />
        <Checkbox value="relationship-issues" label="Relationship issues" />
        <Checkbox value="work-school-stress" label="Work/school stress" />
        <Checkbox value="grief-loss" label="Grief/loss" />
        <Checkbox value="trauma-ptsd" label="Trauma/PTSD" />
        <Checkbox value="self-esteem-issues" label="Self-esteem issues" />
        <Checkbox value="anger-management" label="Anger management" />
        <Checkbox value="substance-use-concerns" label="Substance use concerns" />
        <Checkbox value="other" label="Other (please specify):" />
      </Stack>
      <Input placeholder="Please specify" sx={{ mt: 1 }} />
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Have you previously attended therapy or counseling?</FormLabel>
      <RadioGroup name="previous-therapy">
        <Radio value="yes-currently" label="Yes, currently in therapy" />
        <Radio value="yes-not-currently" label="Yes, but not currently in therapy" />
        <Radio value="no" label="No, this is my first time" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How would you describe your current emotional state?</FormLabel>
      <RadioGroup name="emotional-state">
        <Radio value="happy-stable" label="Generally happy and stable" />
        <Radio value="occasionally-stressed" label="Occasionally stressed but manageable" />
        <Radio value="often-anxious-down" label="Often anxious or down" />
        <Radio value="struggling-significantly" label="Struggling significantly with emotions" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Do you experience any of the following frequently? (Select all that apply)</FormLabel>
      <Stack direction="column" spacing={1}>
        <Checkbox value="difficulty-sleeping" label="Difficulty sleeping" />
        <Checkbox value="changes-in-appetite" label="Changes in appetite" />
        <Checkbox value="panic-attacks" label="Panic attacks" />
        <Checkbox value="difficulty-concentrating" label="Difficulty concentrating" />
        <Checkbox value="mood-swings" label="Mood swings" />
        <Checkbox value="thoughts-of-self-harm" label="Thoughts of self-harm or suicide (If yes, please discuss with your therapist immediately)" />
      </Stack>
    </FormControl>
  </>
);

// Lifestyle & Coping Mechanisms Section
const LifestyleCopingMechanisms = () => (
  <>
    <Typography level="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      3. Lifestyle & Coping Mechanisms
    </Typography>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How often do you engage in physical activity/exercise?</FormLabel>
      <RadioGroup name="physical-activity">
        <Radio value="daily" label="Daily" />
        <Radio value="few-times-a-week" label="A few times a week" />
        <Radio value="occasionally" label="Occasionally" />
        <Radio value="rarely-never" label="Rarely or never" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How do you usually cope with stress? (Select all that apply)</FormLabel>
      <Stack direction="column" spacing={1}>
        <Checkbox value="talking-to-friends-family" label="Talking to friends/family" />
        <Checkbox value="exercising" label="Exercising or physical activity" />
        <Checkbox value="hobbies" label="Engaging in hobbies" />
        <Checkbox value="meditation" label="Meditation or relaxation techniques" />
        <Checkbox value="avoiding-problem" label="Avoiding the problem" />
        <Checkbox value="substance-use" label="Substance use (alcohol, drugs, etc.)" />
        <Checkbox value="other" label="Other (please specify):" />
      </Stack>
      <Input placeholder="Please specify" sx={{ mt: 1 }} />
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How would you rate your current work-life balance?</FormLabel>
      <RadioGroup name="work-life-balance">
        <Radio value="very-balanced" label="Very balanced" />
        <Radio value="somewhat-balanced" label="Somewhat balanced" />
        <Radio value="unbalanced-but-manageable" label="Unbalanced but manageable" />
        <Radio value="very-unbalanced" label="Very unbalanced" />
      </RadioGroup>
    </FormControl>
  </>
);

// Social & Support System Section
const SocialSupportSystem = () => (
  <>
    <Typography level="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      4. Social & Support System
    </Typography>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How comfortable are you discussing personal problems with others?</FormLabel>
      <RadioGroup name="comfort-level">
        <Radio value="very-comfortable" label="Very comfortable" />
        <Radio value="somewhat-comfortable" label="Somewhat comfortable" />
        <Radio value="neutral" label="Neutral" />
        <Radio value="uncomfortable" label="Uncomfortable" />
        <Radio value="very-uncomfortable" label="Very uncomfortable" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Do you have a strong support system? (Friends, family, community, etc.)</FormLabel>
      <RadioGroup name="support-system">
        <Radio value="yes" label="Yes, I have a reliable support system" />
        <Radio value="somewhat" label="Somewhat, but it’s limited" />
        <Radio value="no" label="No, I often feel alone" />
      </RadioGroup>
    </FormControl>
  </>
);

// Goals & Preferences in Therapy Section
const GoalsPreferencesTherapy = () => (
  <>
    <Typography level="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      5. Goals & Preferences in Therapy
    </Typography>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>What do you hope to achieve from therapy? (Select all that apply)</FormLabel>
      <Stack direction="column" spacing={1}>
        <Checkbox value="reduce-stress-anxiety" label="Reduce stress/anxiety" />
        <Checkbox value="improve-mood" label="Improve mood" />
        <Checkbox value="coping-strategies" label="Gain coping strategies" />
        <Checkbox value="improve-relationships" label="Improve relationships" />
        <Checkbox value="personal-growth" label="Personal growth/self-discovery" />
        <Checkbox value="other" label="Other (please specify):" />
      </Stack>
      <Input placeholder="Please specify" sx={{ mt: 1 }} />
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>What type of therapy approach do you prefer?</FormLabel>
      <RadioGroup name="therapy-approach">
        <Radio value="structured" label="Structured (CBT, goal-based therapy)" />
        <Radio value="open-ended" label="Open-ended (talk therapy, exploration)" />
        <Radio value="not-sure" label="Not sure, I’m open to different approaches" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>Would you prefer:</FormLabel>
      <RadioGroup name="session-preference">
        <Radio value="in-person" label="In-person sessions" />
        <Radio value="online" label="Online/video call sessions" />
        <Radio value="no-preference" label="No preference" />
      </RadioGroup>
    </FormControl>

    <FormControl sx={{ mb: 2 }}>
      <FormLabel>How frequently would you like to attend therapy?</FormLabel>
      <RadioGroup name="therapy-frequency">
        <Radio value="weekly" label="Weekly" />
        <Radio value="bi-weekly" label="Bi-weekly" />
        <Radio value="monthly" label="Monthly" />
        <Radio value="as-needed" label="As needed" />
      </RadioGroup>
    </FormControl>
  </>
);

// Main Onboarding Component
const Onboarding = () => {
  return (
    <CssVarsProvider>
      <Card sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 3 }}>
        <CardContent>
          <Typography level="h2" component="h1" sx={{ mb: 2 }}>
            Onboarding
          </Typography>
          <Typography level="body1" sx={{ mb: 4 }}>
            Client Intake Form: Understanding Your Needs and Goals for Therapy.
          </Typography>

          <form>
            <PersonalInformation />
            <MentalHealthWellBeing />
            <LifestyleCopingMechanisms />
            <SocialSupportSystem />
            <GoalsPreferencesTherapy />

            <Button type="submit" sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </CssVarsProvider>
  );
};

export default Onboarding;