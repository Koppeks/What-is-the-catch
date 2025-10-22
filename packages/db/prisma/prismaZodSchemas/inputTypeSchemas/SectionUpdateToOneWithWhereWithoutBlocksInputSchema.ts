import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { SectionUpdateWithoutBlocksInputSchema } from './SectionUpdateWithoutBlocksInputSchema';
import { SectionUncheckedUpdateWithoutBlocksInputSchema } from './SectionUncheckedUpdateWithoutBlocksInputSchema';

export const SectionUpdateToOneWithWhereWithoutBlocksInputSchema: z.ZodType<Prisma.SectionUpdateToOneWithWhereWithoutBlocksInput> = z.strictObject({
  where: z.lazy(() => SectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SectionUpdateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlocksInputSchema) ]),
});

export default SectionUpdateToOneWithWhereWithoutBlocksInputSchema;
