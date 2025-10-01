import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';

export const NullableEnumDocumentKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDocumentKindFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DocumentKindSchema).optional().nullable()
}).strict() as z.ZodType<Prisma.NullableEnumDocumentKindFieldUpdateOperationsInput>;

export default NullableEnumDocumentKindFieldUpdateOperationsInputSchema;
