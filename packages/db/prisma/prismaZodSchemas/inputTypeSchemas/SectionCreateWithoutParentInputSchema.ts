import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { BlockCreateNestedOneWithoutSectionInputSchema } from './BlockCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateWithoutParentInputSchema: z.ZodType<Prisma.SectionCreateWithoutParentInput> = z.strictObject({
  id: z.cuid().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  headingBlock: z.lazy(() => BlockCreateNestedOneWithoutSectionInputSchema),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateWithoutParentInputSchema;
