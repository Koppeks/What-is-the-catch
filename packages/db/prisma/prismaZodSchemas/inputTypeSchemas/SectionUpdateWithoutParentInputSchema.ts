import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutSectionNestedInputSchema } from './DocumentUpdateOneRequiredWithoutSectionNestedInputSchema';
import { BlockUpdateOneRequiredWithoutSectionNestedInputSchema } from './BlockUpdateOneRequiredWithoutSectionNestedInputSchema';
import { SectionUpdateManyWithoutParentNestedInputSchema } from './SectionUpdateManyWithoutParentNestedInputSchema';
import { BlockUpdateManyWithoutSectionNestedInputSchema } from './BlockUpdateManyWithoutSectionNestedInputSchema';

export const SectionUpdateWithoutParentInputSchema: z.ZodType<Prisma.SectionUpdateWithoutParentInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  headingBlock: z.lazy(() => BlockUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  children: z.lazy(() => SectionUpdateManyWithoutParentNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUpdateWithoutParentInputSchema;
