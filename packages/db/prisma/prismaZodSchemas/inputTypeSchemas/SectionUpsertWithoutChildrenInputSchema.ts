import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUpdateWithoutChildrenInputSchema } from './SectionUpdateWithoutChildrenInputSchema';
import { SectionUncheckedUpdateWithoutChildrenInputSchema } from './SectionUncheckedUpdateWithoutChildrenInputSchema';
import { SectionCreateWithoutChildrenInputSchema } from './SectionCreateWithoutChildrenInputSchema';
import { SectionUncheckedCreateWithoutChildrenInputSchema } from './SectionUncheckedCreateWithoutChildrenInputSchema';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUpsertWithoutChildrenInput> = z.strictObject({
  update: z.union([ z.lazy(() => SectionUpdateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => SectionWhereInputSchema).optional(),
});

export default SectionUpsertWithoutChildrenInputSchema;
