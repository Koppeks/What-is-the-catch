import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { BlockCreateNestedOneWithoutSectionInputSchema } from './BlockCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateWithoutChildrenInputSchema: z.ZodType<Prisma.SectionCreateWithoutChildrenInput> = z.strictObject({
  id: z.cuid().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  headingBlock: z.lazy(() => BlockCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  Block: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateWithoutChildrenInputSchema;
