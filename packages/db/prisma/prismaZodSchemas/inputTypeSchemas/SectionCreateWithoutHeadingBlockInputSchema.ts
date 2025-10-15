import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionCreateWithoutHeadingBlockInput> = z.strictObject({
  id: z.cuid().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateWithoutHeadingBlockInputSchema;
