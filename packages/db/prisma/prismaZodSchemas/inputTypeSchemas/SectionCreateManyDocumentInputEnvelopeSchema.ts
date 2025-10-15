import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateManyDocumentInputSchema } from './SectionCreateManyDocumentInputSchema';

export const SectionCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.SectionCreateManyDocumentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SectionCreateManyDocumentInputSchema), z.lazy(() => SectionCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SectionCreateManyDocumentInputEnvelopeSchema;
