import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';

export const SectionUncheckedCreateWithoutBlockInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutBlockInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutBlockInputSchema;
