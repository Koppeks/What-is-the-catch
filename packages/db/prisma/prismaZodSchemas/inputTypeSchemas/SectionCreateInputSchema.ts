import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutSectionInputSchema } from './DocumentCreateNestedOneWithoutSectionInputSchema';
import { BlockCreateNestedOneWithoutSectionInputSchema } from './BlockCreateNestedOneWithoutSectionInputSchema';
import { SectionCreateNestedOneWithoutChildrenInputSchema } from './SectionCreateNestedOneWithoutChildrenInputSchema';
import { SectionCreateNestedManyWithoutParentInputSchema } from './SectionCreateNestedManyWithoutParentInputSchema';
import { BlockCreateNestedManyWithoutSectionInputSchema } from './BlockCreateNestedManyWithoutSectionInputSchema';

export const SectionCreateInputSchema: z.ZodType<Prisma.SectionCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutSectionInputSchema),
  headingBlock: z.lazy(() => BlockCreateNestedOneWithoutSectionInputSchema),
  parent: z.lazy(() => SectionCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => SectionCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionCreateInputSchema;
