import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { BlockCreateNestedOneWithoutSectionInputSchema } from './BlockCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';

export const SectionCreateWithoutBlockInputSchema: z.ZodType<Prisma.SectionCreateWithoutBlockInput> = z.strictObject({
  id: z.cuid().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  headingBlock: z.lazy(() => BlockCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
});

export default SectionCreateWithoutBlockInputSchema;
