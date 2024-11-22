import { auth } from '@clerk/nextjs/server';

// Components
import PageHeader from '@/components/shared/PageHeader';
import GoogleReviewsSettingsForm from '@/components/shared/GoogleReviewsSettingsForm';

// Requests
import { getAccountById } from '@/lib/actions/account.actions';

export default async function SettingsPage() {
  const { userId } = await auth();

  const user = await getAccountById(userId || '');

  console.log({ user });

  return (
    <>
      <PageHeader
        title='Google Reviews Settings'
        subtitle='Configure our advanced AI-powered review analysis system that helps you understand customer sentiment and automatically generates engaging, personalized responses to increase user satisfaction and engagement with your Google Reviews.'
      />
      <GoogleReviewsSettingsForm data={{ userId }} />
    </>
  );
}
