import { type MetaFunction } from '@remix-run/node';
import Container from '~/components/container';
import {
	ExpressIcon,
	JavaScriptIcon,
	NextJSIcon,
	NodeJSIcon,
	PrismaIcon,
	ReactIcon,
	RemixIcon,
	TailwindIcon,
	TypeScriptIcon,
} from '~/components/icons';
import BackgroundGrid from '~/components/background-grid';

export const meta: MetaFunction = () => {
	return [
		{ title: 'About | Wafa Saefulhaq' },
		{
			name: 'description',
			content:
				'An online portfolio and blog by Wafa Saefulhaq, showcase of my projects, and some of my thoughts about website development.',
		},
	];
};

const TECH_STACKS = [
	{ id: 'javascript', name: 'JavaScript', icon: <JavaScriptIcon /> },
	{ id: 'typescript', name: 'TypeScript', icon: <TypeScriptIcon /> },
	{ id: 'reactjs', name: 'ReactJS', icon: <ReactIcon /> },
	{ id: 'nextjs', name: 'NextJS', icon: <NextJSIcon /> },
	{ id: 'remix', name: 'Remix', icon: <RemixIcon /> },
	{ id: 'nodejs', name: 'NodeJS', icon: <NodeJSIcon /> },
	{ id: 'expressjs', name: 'ExpressJS', icon: <ExpressIcon /> },
	{ id: 'prisma', name: 'Prisma', icon: <PrismaIcon /> },
	{ id: 'tailwindcss', name: 'Tailwindcss', icon: <TailwindIcon /> },
];

export default function AboutPage() {
	return (
		<BackgroundGrid>
			<section className='relative pt-48 text-black'>
				<Container>
					<div className='flex gap-6 mb-8'>
						<div className='relative flex-1'>
							<div className='absolute w-20 h-full top-14 right-0 border-t border-l border-b border-[#E2E8FF]/10 rounded-tl-2xl rounded-bl-2xl' />
						</div>
						<div className='basis-[600px] border border-[#E2E8FF]/10 rounded-2xl p-8'>
							<p className='text-[#E2E8FF]/50 mb-2'>How i got where i am now</p>
							<h2 className='font-sans text-4xl mb-8 text-justify'>
								<p>Bridging Worlds -</p>
								<p>from Arabic Literature</p>
								<p>to Full Stack Web Development</p>
							</h2>
							<div>
								<p className='mb-8 font-light tracking-wide'>
									Hi! I&apos;m Wafa Saefulhaq, a passionate individual with a
									diverse background that spans the realms of Arabic ,
									mathematics teaching, and now, the dynamic universe of web
									development.
								</p>
								<p className='mb-8 font-light tracking-wide'>
									With a degree in Arabic literature and language, my journey
									started in the world of words, stories, and cultural nuances.
									The rich tapestry of language has always fascinated me, and
									I&apos;ve spent years delving into the intricacies of
									expression. However, life is an ever-evolving narrative, and
									my story took an unexpected turn.
								</p>
								<p className='mb-8 font-light tracking-wide'>
									As a mathematics teacher, I found joy in unraveling the
									mysteries of numbers and logic. The classroom became a canvas
									for problem-solving, honing my ability to communicate complex
									ideas in a clear and engaging manner.
								</p>
							</div>
						</div>
						<div className='relative flex-1'>
							<div className='absolute w-20 h-20 -top-5 left-0 border-b border-r border-[#E2E8FF]/10 rounded-br-2xl' />
							<div />
						</div>
					</div>
					<div className='flex gap-6 mb-8'>
						<div className='flex-1'>
							{/* <div className='absolute w-full h-full top-14 right-0 border-t border-l border-b border-[#E2E8FF]/10 rounded-tl-2xl rounded-bl-2xl' /> */}
						</div>
						<div className='basis-[600px] border border-[#E2E8FF]/10 rounded-2xl p-8'>
							<h2 className='font-sans text-4xl mb-8'>Tech Stack</h2>
							<div>
								<ul className='flex items-center gap-5 flex-wrap'>
									{TECH_STACKS.map(({ icon, id, name }) => {
										return (
											<li key={id}>
												<div className='h-12 rounded-md'>
													<span className='sr-only'>{name}</span>
													{icon}
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className='relative flex-1'>
							<div
								style={{ height: 'calc(100% + 32px)' }}
								className='absolute w-20 top-8 left-0 border-t border-r border-b border-[#E2E8FF]/10 rounded-tr-2xl rounded-br-2xl'
							/>
							<div />
						</div>
					</div>
					<div className='flex gap-6'>
						<div className='relative flex-1'>
							<div className='absolute w-20 h-full top-8 right-0 border-t border-l border-[#E2E8FF]/10 rounded-tl-2xl' />
							<div />
						</div>
						<div className='basis-[600px] border border-[#E2E8FF]/10 rounded-2xl p-8'>
							<h2 className='font-sans text-4xl mb-8'>Contact</h2>
							<div>
								<ul className='flex items-center gap-5'>
									<li>
										<div className='w-12 h-12 bg-white rounded-md' />
									</li>
									<li>
										<div className='w-12 h-12 bg-white rounded-md' />
									</li>
									<li>
										<div className='w-12 h-12 bg-white rounded-md' />
									</li>
									<li>
										<div className='w-12 h-12 bg-white rounded-md' />
									</li>
								</ul>
							</div>
						</div>
						<div className='flex-1'></div>
					</div>
				</Container>
			</section>
		</BackgroundGrid>
	);
}
