// Assets
import FigmaIcon from '@/app/assets/images/figma-logo.svg';
import NotionIcon from '@/app/assets/images/notion-logo.svg';
import SlackIcon from '@/app/assets/images/slack-logo.svg';
import RelumeIcon from '@/app/assets/images/relume-logo.svg';
import FramerIcon from '@/app/assets/images/framer-logo.svg';
import GithubIcon from '@/app/assets/images/github-logo.svg';

// Components
import SectionTag from '@/components/marketing/SectionTag';
import IntegrationsCol from '@/components/marketing/IntegrationsCol';

const integrations = [
  {
    name: 'Figma',
    icon: FigmaIcon,
    description: 'Figma is a collaborative interface design tool.',
  },
  {
    name: 'Notion',
    icon: NotionIcon,
    description: 'Notion is an all-in-one workspace for notes and docs.',
  },
  {
    name: 'Slack',
    icon: SlackIcon,
    description: 'Slack is a powerful team communication platform.',
  },
  {
    name: 'Relume',
    icon: RelumeIcon,
    description: 'Relume is a no-code website builder and design system.',
  },
  {
    name: 'Framer',
    icon: FramerIcon,
    description: 'Framer is a professional website prototyping tool.',
  },
  {
    name: 'GitHub',
    icon: GithubIcon,
    description: 'GitHub is the leading platform for code collaboration.',
  },
];

export default function Integrations() {
  return (
    <section className='py-24 overflow-hidden px-8'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 items-center lg:gap-16'>
          <div>
            <SectionTag>Integrations</SectionTag>
            <h2 className='text-6xl font-medium mt-6 text-white'>
              Where power meets{' '}
              <span className='text-lime-400'>simplicity</span>
            </h2>
            <p className='text-lg text-white/50 mt-4'>
              Seamlessly connect with your favorite tools and platforms. Our
              integrations make it easy to incorporate Layers into your existing
              workflow.
            </p>
          </div>
          <div>
            <div className='grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
              <IntegrationsCol integrations={integrations} />
              <IntegrationsCol
                integrations={integrations.slice().reverse()}
                className='hidden md:flex'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
