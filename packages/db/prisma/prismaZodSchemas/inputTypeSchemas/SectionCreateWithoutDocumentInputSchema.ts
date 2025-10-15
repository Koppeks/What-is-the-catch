import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateNestedOneWithoutSectionInputSchema } from './BlockCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateWithoutDocumentInputSchema: z.ZodType<Prisma.SectionCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  headingBlock: z.lazy(() => BlockCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateWithoutDocumentInputSchema;
