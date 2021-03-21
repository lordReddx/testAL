const sun = JavaAdapter(Planet, {}, "sun", null, 0, 2);

sun.accessible = true;

const serpulo = JavaAdapter(Planet, {}, "serpulo", sun, 3, 1);

serpulo.accessible = false;