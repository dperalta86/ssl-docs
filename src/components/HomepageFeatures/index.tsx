import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Teoría y apuntes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Autómatas finitos, gramáticas formales, análisis léxico y sintáctico.
        Todo el contenido teórico de la materia, organizado y con ejemplos claros,
        basado en el libro de Muchnik.
      </>
    ),
  },
  {
    title: 'Trabajos Prácticos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cuatro TPs incrementales que culminan en la construcción de un compilador
        básico en C usando <strong>Flex</strong> y <strong>Bison</strong>.
        Cada TP incluye enunciado, objetivos y criterios de entrega.
      </>
    ),
  },
  {
    title: 'Recursos y herramientas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Instructivo de entrega por GitHub, cheatsheets de Flex y Bison,
        configuración del entorno de desarrollo y referencias rápidas para
        no perderse en los detalles técnicos.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
