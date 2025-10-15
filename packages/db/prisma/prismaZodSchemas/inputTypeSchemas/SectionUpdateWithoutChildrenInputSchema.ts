import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutSectionNestedInputSchema } from './DocumentUpdateOneRequiredWithoutSectionNestedInputSchema';
import { BlockUpdateOneRequiredWithoutSectionNestedInputSchema } from './BlockUpdateOneRequiredWithoutSectionNestedInputSchema';
import { SectionUpdateOneWithoutChildrenNestedInputSchema } from './SectionUpdateOneWithoutChildrenNestedInputSchema';
import { BlockUpdateManyWithoutSectionNestedInputSchema } from './BlockUpdateManyWithoutSectionNestedInputSchema';

export const SectionUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUpdateWithoutChildrenInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  headingBlock: z.lazy(() => BlockUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  parent: z.lazy(() => SectionUpdateOneWithoutChildrenNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUpdateWithoutChildrenInputSchema;
