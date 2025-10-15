import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';
import { SectionUpdateManyMutationInputSchema } from './SectionUpdateManyMutationInputSchema';
import { SectionUncheckedUpdateManyWithoutParentInputSchema } from './SectionUncheckedUpdateManyWithoutParentInputSchema';

export const SectionUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.SectionUpdateManyWithWhereWithoutParentInput> = z.strictObject({
  where: z.lazy(() => SectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateManyMutationInputSchema), z.lazy(() => SectionUncheckedUpdateManyWithoutParentInputSchema) ]),
});

export default SectionUpdateManyWithWhereWithoutParentInputSchema;
