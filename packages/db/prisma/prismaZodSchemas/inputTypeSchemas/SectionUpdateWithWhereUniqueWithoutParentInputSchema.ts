import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutParentInputSchema } from './SectionUpdateWithoutParentInputSchema';
import { SectionUncheckedUpdateWithoutParentInputSchema } from './SectionUncheckedUpdateWithoutParentInputSchema';

export const SectionUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.SectionUpdateWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateWithoutParentInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutParentInputSchema) ]),
});

export default SectionUpdateWithWhereUniqueWithoutParentInputSchema;
