import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUpdateWithoutBlocksInputSchema } from './SectionUpdateWithoutBlocksInputSchema';
import { SectionUncheckedUpdateWithoutBlocksInputSchema } from './SectionUncheckedUpdateWithoutBlocksInputSchema';
import { SectionCreateWithoutBlocksInputSchema } from './SectionCreateWithoutBlocksInputSchema';
import { SectionUncheckedCreateWithoutBlocksInputSchema } from './SectionUncheckedCreateWithoutBlocksInputSchema';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionUpsertWithoutBlocksInputSchema: z.ZodType<Prisma.SectionUpsertWithoutBlocksInput> = z.strictObject({
  update: z.union([ z.lazy(() => SectionUpdateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlocksInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlocksInputSchema) ]),
  where: z.lazy(() => SectionWhereInputSchema).optional(),
});

export default SectionUpsertWithoutBlocksInputSchema;
