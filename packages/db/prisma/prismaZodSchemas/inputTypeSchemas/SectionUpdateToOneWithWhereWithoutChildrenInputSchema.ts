import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { SectionUpdateWithoutChildrenInputSchema } from './SectionUpdateWithoutChildrenInputSchema';
import { SectionUncheckedUpdateWithoutChildrenInputSchema } from './SectionUncheckedUpdateWithoutChildrenInputSchema';

export const SectionUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUpdateToOneWithWhereWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => SectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SectionUpdateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutChildrenInputSchema) ]),
});

export default SectionUpdateToOneWithWhereWithoutChildrenInputSchema;
