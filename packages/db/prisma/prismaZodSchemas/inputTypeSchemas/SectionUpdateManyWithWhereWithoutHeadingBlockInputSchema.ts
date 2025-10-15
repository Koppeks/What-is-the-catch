import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';
import { SectionUpdateManyMutationInputSchema } from './SectionUpdateManyMutationInputSchema';
import { SectionUncheckedUpdateManyWithoutHeadingBlockInputSchema } from './SectionUncheckedUpdateManyWithoutHeadingBlockInputSchema';

export const SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUpdateManyWithWhereWithoutHeadingBlockInput> = z.strictObject({
  where: z.lazy(() => SectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateManyMutationInputSchema), z.lazy(() => SectionUncheckedUpdateManyWithoutHeadingBlockInputSchema) ]),
});

export default SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema;
