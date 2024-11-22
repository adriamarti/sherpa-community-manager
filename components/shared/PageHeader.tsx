interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className='mb-8 w-full'>
      <h1 className='text-2xl font-semibold text-gray-900 mb-2'>{title}</h1>
      <p className='text-gray-600 text-sm leading-relaxed w-full'>{subtitle}</p>
    </header>
  );
}
