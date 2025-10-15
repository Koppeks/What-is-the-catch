import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateManyDocumentInputSchema } from './BlockCreateManyDocumentInputSchema';

export const BlockCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.BlockCreateManyDocumentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BlockCreateManyDocumentInputSchema), z.lazy(() => BlockCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BlockCreateManyDocumentInputEnvelopeSchema;
